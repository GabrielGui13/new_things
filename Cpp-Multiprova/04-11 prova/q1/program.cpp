#include<iostream>

using namespace std;

int main() {
    int x1, y1, x2, y2, x, y;

    cin >> x1 >> y1 >> x2 >> y2;

    if (x1 > x2) x = x1 - x2;
    else x = x2 - x1;

    if (y1 > y2) y = y1 - y2;
    else y = y2 - y1;

    cout << x * y << endl;
    
    return 0;
}