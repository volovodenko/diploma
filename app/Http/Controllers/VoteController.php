<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vote;
use Illuminate\Support\Facades\Auth;
use Validator;


class VoteController extends Controller
{


    public function saveVote(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'vote' => 'required|string|max:4|in:up,down',
            'comment_id' => 'required|integer|unique:comments,id,' . $request->comment_id,
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }


        $vote = Vote::where('comment_id', $request->comment_id)
            ->where('user_id', Auth::user()->id)
            ->first();

        $vote = $vote ? $vote : new Vote();


        if ($request->vote === "up") {
            //если vote_up уже есть - сбрасываем : иначе - устанавливаем
            $vote->vote_up = !$vote->vote_up;
            $vote->vote_down = false;
        }

        if ($request->vote === "down") {
            $vote->vote_up = false;
            //если vote_down уже есть - сбрасываем : иначе - устанавливаем
            $vote->vote_down = !$vote->vote_down;
        }


        $vote->user_id = Auth::user()->id;
        $vote->comment_id = $request->comment_id;

        $vote->save();


        return response(['message' => 'success'], 200);

    }


    public function getCommentVotes($commentId)
    {


        $votesUp = Vote::where('comment_id', $commentId)
            ->where('vote_up', true)
            ->count();

        $votesDown = Vote::where('comment_id', $commentId)
            ->where('vote_down', true)
            ->count();


        $currentUserVoteDown = false;
        $currentUserVoteUp = false;

        if (Auth::check()) {

            $userVoteUp = Vote::where('comment_id', $commentId)
                ->where('vote_up', true)
                ->where('user_id', Auth::user()->id)
                ->first();
            $currentUserVoteUp = $userVoteUp ? $userVoteUp->vote_up : false;

            $userVoteDown = Vote::where('comment_id', $commentId)
                ->where('vote_down', true)
                ->where('user_id', Auth::user()->id)
                ->first();
            $currentUserVoteDown = $userVoteDown ? $userVoteDown->vote_down : false;

        }

        $votes = new \stdClass();
        $votes->currentUserVoteUp = $currentUserVoteUp;
        $votes->currentUserVoteDown = $currentUserVoteDown;
        $votes->votesUp = $votesUp;
        $votes->votesDown = $votesDown;


        return $votes;
    }
}
