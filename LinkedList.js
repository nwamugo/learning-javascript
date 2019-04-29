function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

var ll = new LinkedList();
var userList = new LinkedList();
var toDoList = new LinkedList();


LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while(currentNode) {
    if(currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

ll.addToHead(200);
ll.addToHead(400);
ll.addToHead(600);
ll.addToTail("Obi");
ll.addToTail("Cheery");
ll.addToTail(20);

// ll.removeHead()
// ll.removeHead()
// ll.removeHead()
// ll.removeHead()
// var ourExtract = ll.removeHead();
// console.log(ourExtract)
// var ext2 = ll.removeTail();
// console.log(ext2);


ll.search("Obi")
