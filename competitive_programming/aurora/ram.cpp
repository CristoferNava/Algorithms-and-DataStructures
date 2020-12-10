#include <iostream>

using namespace std;

int main() {
    // Procesador == CPU != gabinete operaciones
    //         p [][][][]
                    //  |
                // ^
    //      ----------a, c---------------
    // RAM [[----][----][-----][-----]-----------[][][][]-----[][][][]----]
    // Algorithms & DS
    // time: O(t)
    // space: O(s)

    int a = 5; // typo, id, value
    int b = 3;
    int& c = a; // las referencias no son objetos (no existe en memoria)

    //  2 + 2 = 4
    //  "hola" + "Aurora" = "holaAurora"
    // un apuntador sí es un objeto (sí existe en memoria)
    int* p = &a; // dirección de memoria de a
    cout << p << endl; // valor de p (dirección de memoria de a)
    cout << *p << endl; // valor al que le apunta p (valor de a)
    cout << &p << endl; // dirección de memoria de p


}

