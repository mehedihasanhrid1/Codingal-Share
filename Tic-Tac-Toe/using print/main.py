def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def check_winner(board, player):
    for i in range(3):
        if all(board[i][j] == player for j in range(3)) or all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def is_full(board):
    return all(cell != " " for row in board for cell in row)

def tic_tac_toe():
    print("Welcome to Tic Tac Toe!")
    print("Enter 'q' at any time to quit the game.")
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    current_player = 0

    while True:
        print_board(board)
        print(f"Player {players[current_player]}'s turn")

        try:
            row_input = input("Enter row (1-3): ")
            if row_input.lower() == 'q':
                print("Game quit. Thanks for playing!")
                break

            col_input = input("Enter column (1-3): ")
            if col_input.lower() == 'q':
                print("Game quit. Thanks for playing!")
                break

            row, col = int(row_input) - 1, int(col_input) - 1

            if row < 0 or row > 2 or col < 0 or col > 2:
                print("Invalid input! Row and column must be between 1 and 3.")
                continue
            if board[row][col] != " ":
                print("Cell is already taken! Choose another.")
                continue
        except ValueError:
            print("Invalid input! Please enter a number between 1 and 3 or 'q' to quit.")
            continue

        board[row][col] = players[current_player]

        if check_winner(board, players[current_player]):
            print_board(board)
            print(f"Player {players[current_player]} wins!")
            break

        if is_full(board):
            print_board(board)
            print("It's a draw!")
            break

        current_player = 1 - current_player

if __name__ == "__main__":
    tic_tac_toe()
