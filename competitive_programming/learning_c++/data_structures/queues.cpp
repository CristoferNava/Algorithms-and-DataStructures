// A queue also provides two O(1) time operations: adding an element to the end
// of the queque, and removing the first element in the queue. It is only
// possible to access the first and last element of a queue
#include <iostream>
#include <queue>

using namespace std;

int main() {
    queue<int> q;
    q.push(3);
    q.push(2);
    q.push(5);
    cout << q.front() << endl;
    q.pop();
    cout << q.front() << endl;
}