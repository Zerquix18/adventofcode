f = open('day2.txt')
input = f.read()
f.close()

lines = input.split('\n')
games = []

for line in lines:
    game = line.split(': ')[1]
    turns = game.split('; ')
    game_turns = []

    for turn in turns:
        colors = turn.split(',')
        game_turn = {}
        for color_info in colors:
            [amount, color] = color_info.strip().split(' ')
            game_turn[color] = int(amount)
        
        game_turns.append(game_turn)
    
    games.append(game_turns)

max_red = 12
max_green = 13
max_blue = 14

total_games_possible = 0

for i, turns in enumerate(games):
    id = i + 1
    is_game_possible = True

    for turn in turns:
        total_red = turn.get("red", 0)
        total_green = turn.get("green", 0)
        total_blue = turn.get("blue", 0)

        if total_red > max_red or total_green > max_green or total_blue > max_blue:
            is_game_possible = False

    if is_game_possible:
        total_games_possible += id

print(f"Total games possible: {total_games_possible}")

total_powers = 0
for i, turns in enumerate(games):
    id = i + 1
    max_red = 0
    max_green = 0
    max_blue = 0

    for turn in turns:
        total_red = turn.get("red", 0)
        total_green = turn.get("green", 0)
        total_blue = turn.get("blue", 0)

        if total_red > max_red:
            max_red = total_red
        if total_green > max_green:
            max_green = total_green
        if total_blue > max_blue:
            max_blue = total_blue

    power = max_red * max_green * max_blue
    total_powers += power

print(f"Total powers: {total_powers}")
