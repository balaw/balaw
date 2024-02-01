mingw.md

64 bit
```js
pacman -Syu
pacman -S base-devel mingw-w64-x86_64-toolchain
pacman -S base-devel mingw-w64-i686-toolchain
pacman -S mingw-w64-x86_64-SDL2
pacman -S git cmake
pacman -S base-devel
pacman -S mingw-w64-x86_64-toolchain #for compiling x64 binaries
pacman -S lzip #for extracting gmp
pacman -S mingw-w64-x86_64-wxWidgets
pacman -S mingw-w64-x86_64-boost
pacman -S mingw-w64-x86_64-make
pacman -S mingw-w64-x86_64-db
pacman -S mingw-w64-x86_64-miniupnpc
pacman -S mingw-w64-x86_64-ninja
```
https://packages.msys2.org/package/mingw-w64-x86_64-miniupnpc
https://packages.msys2.org/package/mingw-w64-x86_64-make
32 bits
```js
pacman -Syu

pacman -S base-devel mingw-w64-i686-toolchain
pacman -S mingw-w64-x86_64-SDL2
pacman -S git cmake
pacman -S base-devel
pacman -S mingw-w64-i686-toolchain #for compiling x32 binaries

pacman -S lzip #for extracting gmp
pacman -S mingw-w64-x86_64-wxWidgets
```
