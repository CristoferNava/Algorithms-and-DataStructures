#include <iostream>
#include <vector>

using namespace std;

int main() {
    // un iterador es un apuntador a un elemento en una estructura de datos
    // se dice que una estructura de datos es iterable si soporta iteradores
    vector<int> v = {12, 1, 2, 3, 4, 5, 6};
    //                0   1 2  3  4, 5 
    //                            b            e

    // vector es iterable
    // soporta iterador
    int first = v[0]; // []: subscript hace ver bonitos a los iteradores
    auto b = v.begin();
    auto e = v.end(); // uno adelante del último elemento
    cout << *b << endl;
    
    // O(1)
    // append: O(1)
    // insert: al inicio o enmedio O(n)
    // search by value : O(n)
    // search by index: O(1)

    // linked list
    // O(1)
    cout << *b << endl;


}