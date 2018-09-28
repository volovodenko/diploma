<?php

namespace App\Http\Controllers;

use App\Vote;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use App\Comment;
use App\User;


class CommentController extends Controller
{

    public function saveComment(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'comment' => 'required|string|max:1000',
            'product_id' => 'required|integer|unique:products,id,' . $request->product_id,
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }


        $comment = new Comment();

        $comment->comment = $request->comment;
        $comment->product_id = $request->product_id;
        $comment->user_id = Auth::user()->id;

        $comment->save();

        $productComments = $this->getProductComments($request->product_id);

//        sleep(5);

        return response($productComments, 200);
    }



    public function getComments($productId){
        $productComments = $this->getProductComments($productId);

//        dd($productComments->toArray());

//        sleep(5);
        return response($productComments, 200);
    }


    public function getProductComments($productId){
        $comments = Comment::where('product_id', $productId)->get();

        $vote = new VoteController();

        foreach ($comments as $comment){
            $comment->author = User::find($comment->user_id)->name;
            $comment->votes = $vote->getCommentVotes($comment->id);

            unset($comment->user_id);
            unset($comment->product_id);
        }

        return $comments;
    }
}
