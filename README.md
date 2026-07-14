# DMJScript VS Code Extension

Official Visual Studio Code support for the DMJScript programming language.

DMJScript is a beginner-friendly programming language created by Durvesh Jadhav and designed for learning programming, Arduino development, robotics, electronics, and embedded systems.

---

## Features

### Syntax Highlighting

The extension provides syntax highlighting for:

- Variables
- Strings
- Numbers
- Functions
- Conditions
- Loops
- Arduino Hardware Commands

### Supported Keywords

```dmj
var
show
ask

if
then
else
end

repeat

function
call

led
servo

on
off
wait
```

### File Recognition

Automatically recognizes:

```text
*.dmj
```

files as DMJScript source files.

---

## Example Program

### Hello World

```dmj
show "Hello World"
```

### Variables

```dmj
var name = "Durvesh"

show name
```

### Functions

```dmj
function greet

    show "Hello from DMJScript"

end

call greet
```

### LED Control

```dmj
led status = 13

on status
wait 1000
off status
```

### Servo Control

```dmj
servo arm = 9

move arm 90
```

---

## Install

Search for "DMJScript" in the VS Code Extensions Marketplace

or install directly from:

https://marketplace.visualstudio.com/items?itemName=durveshjadhav.dmjscript

### Manual Installation

Download the latest `.vsix` package and install it:

1. Open Visual Studio Code
2. Open Extensions
3. Click the three-dot menu
4. Select **Install from VSIX**
5. Choose the downloaded file

---

## DMJScript Language

DMJScript aims to make programming easier for beginners while providing built-in support for:

- Arduino
- Robotics
- Electronics
- Embedded Systems
- Mechatronics Projects

---

## Repository

DMJScript Language Repository:

https://github.com/jadhavdurvesh/dmjscript

---

## Roadmap

### Current

- Syntax Highlighting
- File Recognition
- Hardware Keywords
- Arduino-Oriented Syntax

### Planned

- Code Snippets
- Auto Completion
- IntelliSense Support
- Error Diagnostics
- DMJScript IDE Integration

---

## Version

Current Version:

```text
1.0.0
```

---

## Author

Durvesh Jadhav

---

## License

MIT License

Copyright (c) 2026 Durvesh Jadhav

See the LICENSE file for details.