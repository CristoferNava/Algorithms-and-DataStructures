// A priority queue maintains a set of elements.
// The supported operations are insertion and, depending on the type of the 
// queue, retrieval and removal of either the minumum or maximum element.
// Insertion and removal takes O(log n) time, and retrieval take O(1) time.
// An ordered set supports all the operations of a priority queue, but the 
// benefit of using a priority queue is that it has smaller constant factors.
// A set is usually implemented using a balanced binary tree while the the pq
// uses a heap, that is much simpler
#include <iostream>
#include <queue>

using namespace std;

int main() {
    priority_queue<int> p;
    p.push(3);
    p.push(5);
    p.push(7);
    p.push(2);

    cout << p.top() << endl; // 7
    p.pop();
    cout << p.top() << endl; // 5
    p.pop();
    p.push(6);
    cout << p.top() << endl; // 6
}