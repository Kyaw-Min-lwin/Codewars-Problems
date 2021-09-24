// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    let arr = [], temp = [], obj = {};
    this.arr = arr;
    this.obj = obj;

    for (let i = 0; i < collection.length; i++) {
        temp.push(collection[i]);
        if (temp.length === itemsPerPage) {
            arr.push(temp);
            temp = [];
        }
    }
    if (temp.length !== itemsPerPage) {
        arr.push(temp);
    }
    temp = 0;
    arr.forEach(array => {
        obj[temp] = array;
        temp++;
    })

}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Object.keys(this.obj).length;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (this.obj.hasOwnProperty(pageIndex)) {
        return this.obj[pageIndex].length;
    }
    return -1;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    itemIndex = this.collection[itemIndex];
    let s = -1;

    this.arr.forEach(array => {
        if (array.includes(itemIndex)) {
            s = this.arr.indexOf(array);
        }
    })
    return s;
}