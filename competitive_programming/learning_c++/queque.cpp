#include <iostream>
#include <queue>

using namespace std;

int main() {
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
    q.push(40);
    q.pop();


    // 40 --> 30 --> 20
    cout << q.empty() << endl;
    cout << q.size() << endl;
    cout << q.front() << endl;
    cout << q.back() << endl;
}