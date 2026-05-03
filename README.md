# Hono + React + TanStack Router — SSR on Cloudflare Pages

A production-ready starter template that wires together Hono, React 19, and TanStack Router to give you server-side rendering on Cloudflare Pages — without a framework in your way.

// fast, type-safe and edge-native


[![Hono](https://img.shields.io/badge/Hono-ff6b00?style=for-the-badge&logo=hono&logoColor=white)](https://hono.dev)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TanStack Router](https://img.shields.io/badge/TanStack%20Router-10B981?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY2MCIgdmlld0JveD0iMCAwIDY2MyA2NjAiIHdpZHRoPSI2NjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Im0zMDUuMTE0MzE4LjYyNDQzNzcxYzguNzE3ODE3LTEuMTQ0NjIxMjEgMTcuOTI2ODAzLS4zNjU0NTEzNSAyNi43MTI2OTQtLjM2NTQ1MTM1IDMyLjU0ODk4NyAwIDY0LjUwNTk4NyA1LjA1MzM5OTIzIDk1LjY0ODY4IDE0LjYzMDk4Mjc0IDM5Ljc0NDE4IDEyLjIyMzY1ODIgNzYuNzYyODA0IDMxLjc2NjY4NjQgMTA5LjQzNTg3NiA1Ny40Nzc1NjggNDAuMDQ2NjM3IDMxLjUxMzI4MzkgNzMuMjI4OTc0IDcyLjg0NzIxMDkgOTQuNTIwNzE0IDExOS4yMzYyNjA5IDM5LjgzNjM4MyA4Ni43OTAzODYgMzkuNTQ0MjY3IDE5MS45NzMxNDYtMS4yNjg0MjIgMjc4LjM5ODA4MS0yNi4zODg2OTUgNTUuODgwNDQyLTY4LjcyNDAwNyAxMDIuNjUwNDU4LTExOS45NjQ5ODYgMTM2Ljc1NzI0LTQxLjgwODgxMyAyNy44Mjg2MDMtOTAuNzA2ODMxIDQ0Ljg2MjYwMS0xNDAuNDU3MDcgNTAuODkzNDEtNjMuMzI1NDU4IDcuNjc3OTI2LTEzMS43ODQ5MjMtMy41NDE2MDMtMTg4LjcxMjI1OS0zMi43Mjk0NDQtMTA2Ljg2ODg3My01NC43OTUyOTMtMTc5LjUyMzA5MjkxLTE2NS4wNzYyNzEtMTgwLjk2MDQwODItMjg1LjkzMjA2OC0uMjc2NjA1NjQtMjMuMzAwOTcxLjA4NjE2OTk4LTQ2Ljc0MDcxIDQuNjk4ODQ5MDktNjkuODE0OTk4IDcuNTEzMTYwNzEtMzcuNTc4NTcgMjAuNjEyNzIxMzEtNzMuOTAzOTE3IDQwLjI4NjE4OTcxLTEwNi44NzcyODIgMjEuMjgxNDAwMy0zNS42NzAyOTMgNDguNzcwNDg2MS02Ny4xNDczNzY3IDgxLjY4ODI4MDQtOTIuNTI1NTU5NyAzOC42MDI0MjktMjkuNzYxMDEzNSA4My40Njc2OTEtNTEuMTY3NDk4OCAxMzAuOTc4MzcyLTYyLjA1Nzc3NjY5IDExLjQ3MzgzMS0yLjYyOTY2NTE0IDIyLjk5NDYtNC4wODY5OTE0IDM0LjU3MjczLTUuNDk2NDMwNmwzLjY1ODE3MS0uNDQ0ODA1NzZjMy4wNTAwODQtLjM3MTUzMDc5IDYuMTA0MjE3LS43NDc5NDIyMiA5LjE2MjU4OS0xLjE0OTcyNjU0em0tMTEwLjU1NTg2MSA1NDkuNDQxMzE0MjljLTE0LjcxNjc1MiAxLjU3Nzg2My0zMC4yMzg5NjQgNC4yNTYzNS00Mi44Njk5MjggMTIuNTIyMTczIDIuODQzNDMuNjgzNjU4IDYuMTAyMzY5LjAwNDk1NCA5LjA2ODYzOCAwIDcuMTI0NjUyLS4wMTE1NTkgMTQuMzE3NzMyLS4yNzk5MDMgMjEuNDM0OTY0LjAzMjIwMiAxNy44MTc0MDIuNzgxOTEzIDM2LjM4MTcyOSAzLjYzMjE0IDUzLjU4NzQxIDguMzUwMDQyIDIyLjAyOTM3MiA2LjA0MDYzMSA0MS40MzI5NjEgMTcuOTI4Njg3IDYyLjY1NjA0OSAyNS45NDUxNTYgMjIuMzg5NjQ0IDguNDU2NTU0IDQ0LjY3NzA2IDExLjA4NDY3NSA2OC40MjcgMTEuMDg0Njc1IDExLjk2ODEzIDAgMjMuODQ1NTczLS4wMzU1MDQgMzUuNDUwMTMzLTMuMzAyNjk2LTYuMDU2MjAyLTMuMjI1MDgzLTE0LjcyNTgyLTIuNjE5ODY0LTIxLjQzNDk2NC0zLjk2MzIzNi0xNC41NTY4MTQtMi45MTU0NTUtMjguODY4Nzc0LTYuNDc0OTM2LTQyLjg2OTkyOC0xMS40NzAyNjQtMTAuMzA0OTk2LTMuNjc2NjcyLTIwLjIzMDgwMy04LjIxNDI5MS0zMC4xMTA5Ny0xMi44NDg2NjFsLTYuMzQ4NTMxLTIuOTg1MDQ2Yy05LjE3MDUtNC4zMDkyNjMtMTguMzYzMjc3LTguNTYwNzUyLTI3Ljg0NTM5MS0xMi4xNDI2MDgtMjQuOTMyMTYxLTkuNDE4NDY1LTUyLjU2MDE4MS0xNC4wNzE5NjQtNzkuMTQ0NDgyLTExLjIyMTczN3ptMjIuMjU5Mzg1LTYyLjYxNDE2OGMtMjkuMTYzOTE3IDAtNTguNjYwMDc2IDUuMTM3MzQ0LTg0LjkxNTQzNCAxOC4zNjk1OTctNi4zNjEyMzggMy4yMDYwOTItMTIuNDA3NTQ2IDcuMDI1NjYtMTguMTM3Mjc3IDExLjI1ODg5MS0xLjc0NjEyNSAxLjI5MDUyOS00Ljg0MTgyOSAyLjk0ODQ4My01LjQ4NzM1MSA1LjE5MTgzOS0uNjU0NTkxIDIuMjc1NTU4IDEuNjg1OTQyIDQuMTgyMDM5IDMuMDE0MDg2IDUuNjM3NzAzIDYuNTYyMzk2LTMuNDk3NTU2IDEyLjc5NzQ5OC03LjE5OTg3OCAxOS43ODYxMi05Ljg1NTI0NiA0NS4xOTg5Mi0xNy4xNjk4OTMgOTkuOTkyNDU4LTEzLjU3MDc3OSAxNDUuMDk4MjE4IDIuMTcyMzQ4IDIyLjQ5NDM0NiA3Ljg1MTMzNSA0My4yMTk0ODMgMTkuNTkyNDIxIDY1LjEyOTMxNCAyOC44MDAzMzggMjQuNTAzNDYxIDEwLjI5NzgwNyA0OS41MzA0MyAxNi45NzUwMzQgNzUuODQ2Nzk1IDIwLjM5OTEwNCAzMS4wNDE5NSA0LjAzNzU0NiA2Ni40MzM1NDkuNzY1NCA5NC44MDg0OTUtMTMuMjQyMTYxIDkuOTcwNTU2LTQuOTIxODQzIDIzLjgxNDI0NS0xMi40MjIyNjcgMjguMDMwMzM3LTIzLjMyMDMzOS01LjIwNzA0Ny40NTQ5NDctOS44OTIyMzYgMi42ODU5MTgtMTQuODM5NTkgNC4yMjQxNDktNy44NjY2MzIgMi40NDU2NDYtMTUuODI3MjQ4IDQuNTE5NzQtMjMuOTA4MjI5IDYuMTM4ODg3LTI3LjM4ODExMyA1LjQ4NjYwNC01Ni41MTI0NTggNi42MTk0MjktODQuMDkxMDEzIDEuNjM5Nzg4LTI1Ljk5MTkzOS00LjY5MzE1Mi01MC4xNDI1OTYtMTQuMTE5MjQ2LTc0LjE3OTUxMy0yNC4wMzUwMmwtMy4wNjgwNTgtMS4yNjgxNzdjLTIuMDQ1MTM3LS44NDY3ODgtNC4wODk5ODMtMS42OTU4MTYtNi4xMzU2MDMtMi41NDQ0NjdsLTMuMDY5MTQyLTEuMjcyMzY2Yy0xMi4yNzk5NTYtNS4wODU3MjEtMjQuNjA2OTI4LTEwLjExMDc5Ny0zNy4yMTA5MzctMTQuNTEwMjQtMjQuNDg1MzI1LTguNTQ2NTUyLTUwLjcyNjY2Ny0xMy43ODQ2MjgtNzYuNjcxMjE4LTEzLjc4NDYyOHptNTEuMTE0MTQ1LTQ0Ny45OTA5NDMyYy0zNC45NTk2MDIgNy43MjI1Mjk4LTY2LjI3NjkwOCAyMi43NjA1MzE5LTk2LjQ1NzMzOCA0MS43MTgwMDg5LTE3LjUyMTQzNCAxMS4wMDU0MDk5LTM0LjI4MTkyNyAyMi4yNzk5ODkzLTQ5LjQ2NTMwMSAzNi40NDQ0MjgzLTIyLjU3OTI2MTYgMjEuMDY1NDIzLTM5LjgzNjA1NjQgNDYuNjY4NzUxLTU0Ljg4NjY5ODggNzMuNDExNTA5LTE1LjUwNzM3MiAyNy41NTM1Ny0yNS40NDk4OTc2IDU5LjY2NTY4Ni0zMC4yNTU0NTE3IDkwLjgyNDE0OS00LjcxNDA0MzIgMzAuNTY4MTA2LTUuNDkwNjQ4NSA2Mi43MDc0Ny0uMDkwNjg2NCA5My4zMDExNzIgNi43NTAzNjQ4IDM4LjI0ODUyNiAxOS41OTg5NzY5IDc0LjE0MDU3OSAzOS44ODk2NDM2IDEwNy4zMzc2MzEgNi44MTg3OTE4LTMuMTg0NjI1IDExLjY1OTc5Ni0xMC40NDU2MDMgMTcuMzEyODU1NS0xNS4zMzY4OTYgMTEuNDE0OTQyOC05Ljg3NTg4OCAyMy4zOTk1NjA4LTE5LjAyOTMxMSAzNi4yNzQ1NTQ4LTI2LjkyODUzNSA0Ljc2NTk4MS0yLjkyMzcxMiA5LjY2MjIyMi01LjE5NDMxNSAxNC44Mzk1OS03LjI3NTAxNCAxLjk1MzA1NS0uNzg1MjE2IDUuMTQ2MDQtMS41MDI3MjcgNi4wNjUyNy0zLjY0NzgyOCAxLjQ2MDg3Ni0zLjQwNjczMi0xLjI0MDc1NC05LjMzNTg5Ny0xLjcwNDkwNC0xMi44NjU2NTQtMS4zMjQ4NDUtMTAuMDk1NTE3LTIuMTI0NTM0LTIwLjM2Mjc3NC0xLjg3NDczNS0zMC41NDk5NDEuNzI1NDkyLTI5LjY2ODk0NyA2LjI2OTcyNy01OS43NTE1NTcgMTYuODI1NjIzLTg3LjUyMTQ1MyA3Ljk1NDg0NS0yMC45MjQyMzMgMjAuMTA2ODItMzkuOTIyMTY4IDM0LjUwMjg3Mi01Ni45NzE1MTIgNC44ODQ2OTktNS43ODU0OTggMTAuMDc3NzMxLTExLjE3MDU0NSAxNS40MzcyOTYtMTYuNTEyNjU2IDMuMTY3NDI4LTMuMTU3Mzc4IDcuMDk4MjcxLTUuODU4OTgzIDkuMDY4NjM5LTkuOTA4OTE1LTEwLjMzNjU5OS4wMDY2MDYtMjAuNjc0ODQ3IDIuOTg3Mjg5LTMwLjUwMzYwMyA2LjAxMzM4NS0yMS4xNzQ0NDcgNi41MTk1MjItNDEuODAxNDc3IDE2LjE5MzEyLTU5LjM1ODM2MiAyOS44NDE1MTItOC4wMDg0MzIgNi4yMjY0MDktMTMuODczMzY4IDE0LjM4NzM3MS0yMS40NDczMyAyMC45Mzk5MjEtMi4zMjMyMiAyLjAxMDUxNi02LjQ4NDkwMSA0LjcwNDY5MS05LjY5NTE5OSAzLjE4NzkyOC00Ljg1MDA3MjgtMi4yOTA0Mi00LjEwMTQ5NzktMTEuODM1MjEzLTQuNjU3MTU4MS0xNi4yMjIwMTktMi4xMzY5MDExLTE2Ljg3MzQ3NiA0LjI1NDg0MDEtMzguMjE2MzI1IDEyLjM3Nzg2NzEtNTIuODQzMTQyIDEzLjAzOTg3OC0yMy40Nzk2OTQgMzcuMTUwOTE1LTQzLjUyODcxMiA2NS40NjczMjctNDIuODI4NTQgMTIuMjI4NjQ3LjMwMjE5NyAyMi45MzQ1ODcgNC41NTExMTUgMzQuNjI1NzExIDcuMzI0NTU1LTIuOTY0NjIxLTQuMjExNzY0LTYuOTM5MTU4LTcuMjgxNjItMTAuNzE3NDgyLTEwLjczMzc2My05LjI1NzQzMS04LjQ1OTAzMS0xOS4zODI5NzktMTYuMTg0ODY0LTMwLjUwMzYwMy0yMi4wMjg5ODUtNC40NzQxMzYtMi4zNTA2OTQtOS4yOTEyMzItMy43NzkxMS0xNC4wMTUxNjktNS41MDY0MjEtMi4zNzUxNTktLjg2Nzc4My01LjM2NjE2LTIuMDYyNTMzLTYuMjU5ODM0LTQuNzAyMjEzLTEuNjU0NjE0LTQuODg4ODE3IDcuMTQ4NTYxLTkuNDE2ODEzIDEwLjM4MTk0My0xMS40Nzg1MjIgMTIuNDk5ODgyLTcuOTY5NDA2IDI3LjgyNjcwNS0xNC41MjUyNTggNDIuODY5OTI4LTE0Ljg5NDMzNCAyMy41MDkyMDktLjU3NzE0NyA0Ni40NzkyNDYgMTIuNDY3Njc4IDU2LjE2MjkwMyAzNC42NjU5MjYgMy40MDQ0NjkgNy44MDMxNzEgNC40MTEyNzMgMTYuMDU0OTY5IDUuMDc5MTA5IDI0LjM4MjkwN2wuMTIxNzQ5IDEuNTYyMjkuMTc0MzI1IDIuMzQ1NTg3Yy4wMTkxMy4yNjA3MDguMDM4MjQ0LjUyMTQzMy4wNTc0MDMuNzgyMTY0bC4xMTYwMSAxLjU2NDM3LjEyMDEyOCAxLjU2Mzk3MWM3LjM4MzUyLTYuMDE5MTY0IDEyLjU3NjU1My0xNC44NzY5OTUgMTkuNzg2MTItMjEuMzIzODU5IDE2Ljg2MTA3My0xNS4wNzg0NiAzOS45MzY2MzYtMjEuNzcyMiA2MS44MzE2MjctMTQuOTg0MzMzIDE5Ljc4Njk0NSA2LjEzMzEwNyAzNi45ODQzODIgMTkuNzg4MTA1IDQ3LjEwNTgwNyAzNy45NTk1NDEgMi42NDgwNDIgNC43NTQyMzEgMTAuMDM1Njg1IDE2LjM3Mzk0MiA0LjY5ODM3OSAyMS4xMDkxODMtNC4xNzczNDUgMy43MDcyNzctOS40NzUwNzkuODE4MjQzLTEzLjg4MDc4OC0uNzE5MTYyLTMuMzM2MDUtMS4xNjM3Ni02Ljc4MjkzOS0xLjkwMjE0LTEwLjI0MTgyOC0yLjU4NTY5OGwtMS44ODcyNjItLjM2OTYzOWMtLjYyOTA4OS0uMTIyODg2LTEuMjU3OTc5LS4yNDYxODctMS44ODYwNzktLjM3MjEyOS0xMS45ODA0OTYtMi40MDE4ODYtMjUuOTE2NTItMi4xNTI1MzMtMzcuOTIzMzk4LS4wNDEyODQtNy43NjI3NTQgMS4zNjQ4MzktMTUuMzQ5MDgzIDQuMTI3NTQ1LTIzLjA4MzgwNyA1LjI3MTkyOXYxLjY1MTM0OGMyMS4xNDk3MTQuMTc1MDQzIDQxLjYwODU2MyAxMi4yNDA2MTggNTIuMDQzMjY4IDMwLjU0OTk0MSA0LjMyMzI2NyA3LjU4NTQ2OCA2LjQ4MjQyOCAxNi4yNjc0MzEgOC4xMzg2OTEgMjQuNzcwMjIzIDIuMDQ3ODY0IDEwLjUwOTE4LjYwODQyMyAyMS45NTg4MDItMi4yNjMwMzcgMzIuMjAxMjg5LS45NjI5MjUgMy40MzM5NzktMi43MTA2OTkgOS4yNTU4MDctNi44MTcxNDMgMTAuMDQ2ODAyLTIuOTAyNzg5LjU1ODk4Mi01LjM2NzgxLTIuMzMwODc4LTcuMDI0ODk4LTQuMjc5NDY4LTQuMzQzODc4LTUuMTA3NjItOC40NzU4NzktOS45NjM0MS0xMy41NzMyNzgtMTQuMzc0MTYxLTEyLjg5NTYwNC0xMS4xNTczMzMtMjYuNTMwNzE1LTIxLjQ0OTM2MS00MC4zOTY2NjMtMzEuMzczMTM4LTcuMzYyMDg2LTUuMjY5NDUyLTE1LjQyNTc1NS0xMi4xMjAwNy0yMy45MDgyMjktMTUuMzQwMTk5IDIuMzg1MDUyIDUuNzQ1MDQxIDQuNzIxNDYzIDExLjA4NjMyNiA1LjUzMjY5NCAxNy4zMzkxNTYgMi4zODU4NzYgMTguMzkyNzE2LTUuMzE0MjIzIDM1LjcwNDYyNS0xNi44NzE3OSA0OS41NDA0NDUtMy41MjY4NzYgNC4yMjI0OTgtNy4yOTk0MyA4LjQ3NTU0NS0xMS43NDQ3MTIgMTEuNzU1OTQ4LTEuODQzNDA3IDEuMzYwNzExLTQuMTU2NzM0IDMuMTM3NTYxLTYuNTk1MzczIDIuNzUyNzk3LTcuNjQ1Njg3LTEuMjA3OTYxLTguNTU1ODQ5LTEyLjczMjcyLTkuNzI4MTc2LTE4LjYzNzExNS0zLjk3MDQxNS0xOS45OTg2NTItMi4zNzU5ODQtMzkuODYxMDY4IDMuMTMyODAyLTU5LjQ0ODUzNC00LjkwMTE4NyAyLjQ4NTI3OS04LjQ0MzcyNyA3LjkyMzk5NC0xMS41MjEyOTMgMTIuMzg1MTExLTYuNzcwOTc1IDkuODE2NDM5LTEyLjY0NTgwNCAyMC4xOTkyOTEtMTYuODU4NTk5IDMxLjM3NTYxNS0xNi43Nzc4MDYgNDQuNTE5NTIxLTE2LjYxNjIxOSA5Ni42NjQxNDIgNS4xMTg4MzQgMTM5LjUyMzIzMyAyLjQyNzA5OCA0Ljc4NjQzMyA2LjExMDYxNCA0LjE0NDA1OCAxMC44OTQ3MzMgNC4xNDQwNTguNzIwODU0IDAgMS40NDI1Ny0uMDA0NTE1IDIuMTY0ODUxLS4wMTA5MjRsMi4xNjgyMzItLjAyMjI4M2M0LjMzODY0OC0uMDQ1NDM4IDguNjg2ODAzLS4wNjQ2MzUgMTIuOTc5NzcyLjUwODc5NSAyLjIyNzU4OC4yOTcyNDMgNS4zMjA4MTguMDMyMjAyIDcuMDg0MjU2IDEuNjczNjQyIDIuMTExMzQ0IDEuOTY2NzU1Ljk4NjAwOCA1LjMzODgwOC40OTk2IDcuNzU4ODU5LTEuMzU4NjQ3IDYuNzY1NTc0LTEuODEyOTA0IDEyLjkxNDM2OS0xLjgxMjkwNCAxOS44MTYxNzggOS4wMjQxMi0xLjM5ODY5MiAxMS41MjU0MTUtMTUuODY2MTUzIDE0LjcyNDE3Mi0yMy4xMTg4NzQgMy42MjQ5ODItOC4yMTYyODMgNy4zMTM0NDQtMTYuNDQwODIzIDEwLjY2NzE5Mi0yNC43NzAyMjMgMS42NDg4NDMtNC4wOTM2OTIgMy44NTQxNzEtOC42NzEyMjkgMy4yNzU0MjctMTMuMjEwNzg1LS42NDk2NDQtNS4xMDE4NC00LjMzNTYzMy0xMC41MTA4MzEtNi45MDQ1MzEtMTQuODYyMTM0LTQuODYyNDQtOC4yMzQ0NDctMTAuMzg5MzYzLTE2LjcwODM0LTEzLjk2OTAwMi0yNS41OTU4OTYtMi44NjE1NjctNy4xMDQ5MjYtLjE5NzAzNi0xNS45ODMzOTkgNy44NzE1NzktMTguNTIxNTIxIDQuNDUwMjI4LTEuNDAwMzQ0IDkuMTk4MDczIDEuMzQ1ODQ4IDEyLjA5NDI2NiA0LjU2MjY3NSA2LjA3MjY5IDYuNzQzMjggOS45OTI4MTUgMTYuNzc3Njk3IDE0LjQwMTgyMyAyNC42OTI2MDlsMzQuMzk0ODczIDYxLjkyNTU1NmMyLjkyMDkyNiA1LjI0Mzg1NiA1Ljg0ODQ0NyAxMC40ODE5MzMgOC44MzY5NzYgMTUuNjg3ODA4IDEuMTY1NzMyIDIuMDMxMTU4IDIuMzUyMDc1IDUuMTY3MDY4IDQuNzQwNDI0IDYuMDMzMiAyLjEyNzAwOC43NzExOCA1LjAzMzA5NS0uMzI1MzE1IDcuMTQ4NTYxLS43NDg4ODYgNS40OTIyOTctMS4wOTk3OTggMTAuOTc2MzUtMi4yODcxMTcgMTYuNDg4NDM0LTMuMjgyODggNi42MDUyNjYtMS4xOTMwOTkgMTYuNjczOTI4LS45NjkzNDIgMjEuNDM0OTY0LTYuMTI5ODA1LTYuOTYzMDY2LTIuMjA1Mzc1LTE1LjAxMTg5NS0yLjA3NDkxOS0yMi4yNTkzODYtMS41Nzc4NjMtNC4zNTI5NDcuMjk4ODk0LTkuMTc4Mjg3IDEuODU2MTE2LTEzLjE3ODM4MS0uNjg2MTM1LTUuOTUzMTQ5LTMuNzgzMjM5LTkuOTEwMzczLTEyLjUyMjE3My0xMy41NTI2NjgtMTguMzc3ODU0LTguOTgwNDI1LTE0LjQzOTM4OC0xNy40NDE0NjUtMjkuMDk1OTI5LTI2LjA0MTAwOC00My43NjA3MjZsLTEuMzc2MjYxLTIuMzM1MDE0LTIuNzY1OTQzLTQuNjY1MjU4Yy0xLjM4MDU5Ny0yLjMzNDM4Ny0yLjc1MDc4Ni00LjY3NDc2LTQuMDc5NzUzLTcuMDM2MTg4LTEuMDI3MjMtMS44MjYzOTEtMi41NDk5MzctNC4yMzMyMzEtMS4wNzgzNDQtNi4yNDcwNSAxLjU0NTc5MS0yLjExNDQ3NiA0LjkxNDcyLTIuMjM5MTQ2IDcuOTU2NDczLTIuMjQzMTE3bC42MDMzNTEuMDAwMjYxYzEuMTk1NDI4LjAwMTUyNiAyLjMxNTU3Mi4wMDI0MjcgMy4yMjI4MTEtLjExNjkyIDEyLjI3Mzk5LTEuNjE1MDE5IDI0LjcxODYzNS0yLjk1MjYxMSAzNy4wOTg5NzYtMi45NTI2MTEtLjk2Mzc0OS0zLjM1MjIzNy0zLjcxOTc5MS03LjE0MTI1NS0yLjgzODQ4NC0xMC43MzA0NiAxLjk3MjAxNy04LjAzMDUwNiAxMy41MjYyODctMTAuNTQzMDMzIDE4Ljg5OTg2Ny00Ljc4MDY1MyAzLjYwNzY3IDMuODY4MjgzIDUuNzA0MTc0IDkuMTkyMjI5IDguMDUxMzAzIDEzLjg1OTc2NSAzLjA5NzM1MiA2LjE2MjAwNiA2LjYyNDIyOCAxMi4xMTg0MTggOS45NDA4NzYgMTguMTY0ODMgNS44MDU1NzggMTAuNTg1OTY3IDEyLjE0NjIwNSAyMC44ODEyOTcgMTguMTE2NjY3IDMxLjM3NTYxNS40OTIzNy44NjU1NjEuOTk5Njg3IDEuNzI2Njg1IDEuNTEyMjY5IDIuNTg3MDk4bC43NzE2MTMgMS4yOTA1NTJjMi41NzcxMzggNC4zMDMxNjggNS4xNjQ4OTUgOC42MzUxMjMgNi41NTMwOTQgMTMuNDYxNTA2LTIwLjczNTg1NC0uOTQ4Ny0zNi4zMDE3Ni0yNS4wMTg3NTEtNDUuMzQzMTkzLTQxLjI4MzcwNC0uNzIxMzY5IDIuNjA0MTc2LjQ1MDk1OSA0LjkyODQ0OCAxLjM4ODMyNiA3LjQzMTA2NiAxLjk0ODEwOSA1LjE5NzYxOSA0LjI3NjI3NSAxMC4xNDc1MzUgNy4yMDYyNyAxNC44NjIxMzQgNC4xODQ3NjUgNi43MzI1NDYgOC45ODIwNzUgMTMuNjY1NzMyIDE1LjMxMzYzMyAxOC41NTM3MjIgMTEuMjM2MDQzIDguNjczNzA3IDI2LjA1MjU1IDguNzIxNTk2IDM5LjU3MjI0MSA3Ljc5NDM2NCA4LjY2OTYxOS0uNTk1MzExIDE5LjUwMjUyLTQuNTQyMDM0IDI4LjAzMDMzOC0xLjg2NDM3MiA4LjUxMzgwMyAyLjY3MzUzMiAxMS45NDA5MjQgMTIuMDYzMDk4IDYuODg0NzQ1IDE5LjI3NjE4Ny0zLjc4NzM5MyA1LjQwMzIxMS04Ljg0Mjc0NyA3LjQ0MzQ1Mi0xNS4xMjg5NjIgOC4yNTc1NjYgNC40NDUyODIgOS41MzU3MSAxMC4yNjg5OTYgMTguMzg1Mjg1IDE0LjQ5MDAzNiAyOC4wNzI5MTkgMS43NTg0OTEgNC4wMzU4OTUgMy41OTExOCAxMC4yMjEwMiA3LjgwNDggMTIuMzUwNDMzIDIuODA1NTA3IDEuNDE2ODU3IDYuODI0NTYyLjA5NzQzIDkuODU3NjEuMDM0Njc4LTMuMDQzNzY1LTguMDUzNjI1LTguNzQyOTkyLTE0Ljg4NzcyOS0xMS41NDE5MDQtMjMuMTE4ODc0IDguNTMzNTg5LjM5MDU0NCAxNi43ODY4NzUgNC44NDM0MDQgMjQuNzMyNjUxIDcuNjg1Mzc0IDE1LjYzMDM3NiA1LjU5MDE0NCAzMS4wNjM4MzYgMTEuNzAxODU0IDQ2LjQ3NTMzMyAxNy44NjkxM2w3LjExMjA3NyAyLjg0ODY4NWM2LjMzODk3OCAyLjUzODk0NyAxMi43MTU4OCA1LjA1MjI5OSAxOC45NjE2OTkgNy44MTI1MjggMi4yODUyOTcgMS4wMDk3OTkgNS40NDk0MjcgMy4zNzA0MDEgNy45NzU0NTUgMS45MTcyMTUgMi4wNjEwNTQtMS4xODY0OTQgMy4zOTQxNDQtNC4wMTUyNTMgNC42NjU0MDMtNS45MzE2NDMgMy41NTU3My01LjM2MTkyNyA2Ljc3NTkyMS0xMC45Mjg2MjIgOS45NjU2MDktMTYuNTEzNDgxIDEyLjc3NDQxNC0yMi4zNjU4NiAyMi4xNDM5NjctNDYuODcyNjkyIDI4LjQwMjk3Ni03MS44MzM2NDYgMjAuNjQ1MTY4LTgyLjMyMzAwOSAyLjkzNDExNy0xNzMuMTU2MjQxLTQ2LjY3NzEwNy0yNDEuOTIyNTA3LTE5LjA2MTQ1NC0yNi40MjA3NDUtNDMuMDMzMTY0LTQ5LjI2MjE5My02OS40NjE2NS02OC4xNzgzODYxLTY2LjEzOTIzLTQ3LjMzNjcyMS0xNTIuOTExMjYyLTY2LjI5NDE5OC0yMzIuNDg2OTE3LTQ4LjcxNzI0ODF6bTEzNS4yMDUxNTggNDEwLjUyOTI4NDJjLTE3LjUzMjk3NyA0LjU3MDkzMS0zNS42MDE4MjcgOC43MTQxNjQtNTMuNTg3NDEgMTEuMDQwMDg4IDIuMzY1MjY1IDguMDUyNzk5IDguMTQ1Mjg2IDE1Ljg4NTk2OSAxMi4zNzYyMTggMjMuMTE4ODc0IDEuNjM1NjUzIDIuNzk2NTU4IDMuMzg1OSA2LjU0MTgxNiA2LjYxODQ1NyA3Ljc1NTU1NyAzLjY1MTM2NCAxLjM3MDYxOSA4LjA2MzY2OS0uODUzNzQ3IDExLjUwODkyNy0xLjk3NTgzOC0xLjU5NTI1Ni00LjM2NDUxMy00LjI3OTU3My04LjI5MjI0NS02LjQ3NjY1Ny0xMi4zODUxMTItLjkwNTIxNS0xLjY4NzY3Ny0yLjMwNTkwNy0zLjY4NTgwOS0xLjU1OTgwNS01LjY4OTcyIDEuNDEwNTg1LTMuNzg2NTQxIDcuMjY2NDUyLTMuNTYzNjA5IDEwLjUwOTcyNy00LjIyMTY3MSA4LjU0Njc4LTEuNzMzOTE2IDE3LjAwNDUyMi0zLjg5ODAwOCAyNS41NTcwNzMtNS42MTEyODEgMy4xNTA5MzktLjYzMTY0MSA3LjUzODUxMi0yLjM0MjQzOCAxMC43MDUxMTUtMS4yODU1NzUgMi4zNzEwMzcuNzkxMjMyIDMuODAwMTQ3IDIuNzQ0NzQzIDUuMTUyMzA0IDQuNzgxOTQ4bC42MDYxOTYuOTE4NzUyYy44MDkxMiAxLjIyMjgyNyAxLjYzNzI0NiAyLjQxNzU0IDIuNjcxMjEyIDMuMzUxMTY1IDMuNDU3NjI1IDMuMTIxODc0IDguNjI4Mzk4IDMuNjAxNTkgMTMuMDE3NjE5IDQuNDUzNjg2LTIuNjc4NTQ2LTYuMDI3NDIxLTcuMTMwNDI0LTExLjMwMTAwMS05Ljk4NDU3MS0xNy4zMzkxNTYtMS42NTk1NjEtMy41MTE1OTItMy4wMjMxNTUtOC42Nzc4MzQtNi42NTYzODEtMTAuNzA3MzQxLTUuMDA1MDY0LTIuNzk1NzMzLTE1LjM0MTY2MyAyLjQ2MTMzNC0yMC40NTgwMjQgMy43OTU2MjR6bS0xMTAuNDcyNTA3LTQwLjE1MTcwNmMtLjgyNTI0NiAxMC40Njc4OTctNC4wMzYzNjkgMTguOTg0NzI1LTkuMDY4NjM5IDI4LjA3MjkxOSA1Ljc2NjgzLjcyOTg5NiAxMS42NDkwNzkuOTg5OTg0IDE3LjMxMjg1NiAyLjM5MzYzIDQuMjQ0OTQ3IDEuMDUxOTA4IDguMTU2ODI4IDMuMDU4Mjk2IDEyLjM2NjMyNSA0LjIxMTc2My0yLjI1MDY3MS02LjE1Nzg3Ny02LjQyNjM2Ny0xMS42NTE5MTMtOS42NjEzOTgtMTcuMzM5MTU2LTMuMjY2MzU4LTUuNzQwOTEyLTYuMTg5NzU4LTEyLjcxNzAzMi0xMC45NDkxNDQtMTcuMzM5MTU2eiIgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjk3NzgpIi8+PC9zdmc+)
](https://tanstack.com/router/latest)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20App-black?style=for-the-badge&logo=cloudflare)](https://hono-react-tanstack-cf-pages-starter.pages.dev)


---


## What Is This?

This is a full-stack web application starter built for the edge. The server runs on Cloudflare Pages Functions via Hono. The frontend is React 19 with TanStack Router handling both server-side rendering and client-side hydration. Vite ties it all together for development and builds.

You get the performance of SSR (real HTML on first load, great for SEO) with the interactivity of a React SPA after hydration — and it includes Cloudflare Pages deploy support.

---

## Features

* **Server-Side Rendering (SSR)** — Pages are rendered on the server for faster first load and better SEO.

* **File-based routing** — Routes live in `src/client/routes/` and are auto-discovered. Just add a file to create a new route.

* **Hono API layer** — Comes with a clean `/api` prefix for backend routes. You can add more endpoints inside `src/api/index.ts`.

* **Tailwind CSS v4** — Utility-first styling already set up and ready to use.

* **TanStack Router Devtools** — Available in development for debugging your routes. Not included in production builds.

* **Hot module replacement (HMR)** — Instant updates while developing, for both client and server code.

* **Cloudflare Pages deploy support** — Ready to build and deploy directly to Cloudflare’s edge.

---

## Architecture

```
src/
├── api/
│   └── index.ts           # Hono API router
├── client/
│   ├── main.tsx           # Client entry — hydrateRoot
│   ├── router.tsx         # TanStack Router factory (shared by client + server)
│   ├── index.css          # Tailwind import
│   ├── routeTree.gen.ts   # Auto-generated route tree (do not edit)
│   └── routes/
│       ├── __root.tsx     # Root layout — HTML shell, header, footer, devtools
│       ├── index.tsx      # Home page
│       ├── about.tsx      # About page
│       ├── posts.tsx      # Posts listing — SSR loader from JSONPlaceholder API
│       └── post.$id.tsx   # Post detail — dynamic param, SSR loader
└── server/
    ├── app.ts             # Hono app — mounts /api and SSR catch-all
    └── ssr.ts             # SSR handler — routes to API, assets, or TanStack SSR
```

### How the request cycle works

1. A request comes in to Cloudflare Pages.
2. The Hono app (`src/server/app.ts`) receives it.
3. If the path starts with `/api`, it's handled by the Hono API router.
4. If the path looks like a static asset (has a file extension), it's forwarded to the Cloudflare Pages asset store.
5. Everything else falls through to the SSR handler (`src/server/ssr.ts`), which creates a server-side TanStack Router instance and streams the rendered HTML back to the client.
6. The browser loads the client bundle, and React hydrates the existing HTML in place.

### Build pipeline

The build is split into two Vite passes:

- **Client build** (`vite build`) — Bundles `src/client/main.tsx` into `dist/assets/client.js`, extracts styles into `dist/assets/main.css`, and splits each route into its own chunk under `dist/assets/chunks/`.
- **Server build** (`vite build --mode server`) — Bundles `src/server/app.ts` into `dist/_worker.js`, which Cloudflare Pages picks up as the Functions entrypoint.

A key detail in the server build: TanStack Router's `isServer` module is aliased to its explicit server variant. Without this, the router falls back to `createBrowserHistory()` during the server build, which crashes in the Workers runtime because there's no `window` object.

---

## Routes

| Path | Description |
|---|---|
| `/` | Home — counter demo, client-side API fetch |
| `/about` | About — stack overview cards |
| `/posts` | Posts listing — server-rendered via loader |
| `/post/$id` | Post detail — dynamic route, server-rendered |

---

## API Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/api/health` | `{ error: false, message: "OK" }` |
| GET | `/api/timestamp` | `{"error":false,"message":"Timestamp generated successfully","data":{"timestamp":1777782183478,"iso":"2026-05-03T04:23:03.478Z"}}` |

---

## Getting Started

**Install dependencies**

```bash
npm install
```

**Run locally**

```bash
npm run dev
```

This starts the Vite dev server with the Hono dev server middleware and Cloudflare adapter. Hot module replacement works for both client and server code.

**Preview the production build locally**

```bash
npm run preview
```

This runs `wrangler pages dev` against the built `./dist` directory, simulating the Cloudflare Pages environment locally.

**Deploy**

```bash
npm run deploy
```

Builds both client and server, then runs `wrangler pages deploy` to push to Cloudflare Pages.

**Generate Cloudflare binding types**

```bash
npm run cf-typegen
```

Generates the `CloudflareBindings` interface based on your `wrangler.jsonc` config. Run this after adding KV namespaces, R2 buckets, D1 databases, or other bindings. Pass the type to Hono when you need access to bindings:

```ts
// src/server/app.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Cloudflare Pages |
| Server framework | Hono v4 |
| Frontend | React 19 |
| Router | TanStack Router v1 |
| Styling | Tailwind CSS v4 |
| Build tool | Vite 6 |
| Deployment | Wrangler 4 |
| Language | TypeScript |

---


## Wrapping Up

This starter is heavily inspired by ideas and patterns from the following projects. Exploring these working repositories helped me learn a lot and played a key role in shaping this setup:

- [bskimball](https://github.com/bskimball) / [tanstack-hono](https://github.com/bskimball/tanstack-hono)
- [oscarvz](https://github.com/oscarvz) / [hono-ssr-tanstack-router](https://github.com/oscarvz/hono-ssr-tanstack-router)
- [oscarvz](https://github.com/oscarvz) / [hono-preact-starter](https://github.com/oscarvz/hono-preact-starter)
- [nurbxfit](https://github.com/nurbxfit) / [cf-hono-react-ssr](https://github.com/nurbxfit/cf-hono-react-ssr)
- [yusukev](https://github.com/yusukev) / [hinoco](https://github.com/yusukev/hinoco)
- [smatsuodev](https://github.com/smatsuodev) / [scrap](https://github.com/smatsuodev/scrap)

Getting everything to actually work with Cloudflare Pages deployment was the real challenge at the end. This part was largely shaped by insights from:

- [saltbo](https://github.com/saltbo) / [cfrv-starter](https://github.com/saltbo/cfrv-starter)

---

***Happy shipping*** 🚀

[aditya76-git](https://github.com/aditya76-git) / [hono-react-tanstack-cf-pages-starter](https://github.com/aditya76-git/hono-react-tanstack-cf-pages-starter)
