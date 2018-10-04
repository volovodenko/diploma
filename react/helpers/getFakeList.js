export default (numInvisibleItems) => {
    const fakeList = [];

    for (let i = 1; i <= numInvisibleItems; i++) {
        fakeList.push(i);
    }

    return fakeList;
};