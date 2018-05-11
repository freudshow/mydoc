#include <iostream>
#include <stdio.h>
#include "crcCompute.h"

using namespace std;

int main(int argc, char *argv[])
{

    CRC16 crc16(CRC16::eCCITT_FALSE);
    char data1[] = {'1', '2', '3', '4', '5', '6', '7', '8', '9'};
    char data2[] = {'5', '6', '7', '8', '9'};
    unsigned short c1, c2;
    c1 = crc16.crcCompute(data1, 9);
    c2 = crc16.crcCompute(data1, 4, true);
    c2 = crc16.crcCompute(data2, 5, false);


    printf("%04x\n", c1);
    printf("%04x\n", c2);

    return 0;
}
