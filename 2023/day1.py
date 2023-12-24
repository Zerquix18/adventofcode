f = open('day1.txt')
input = f.read()
f.close()

numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

def string_to_number(string: str):
  if len(string) == 1:
    return string

  return str(numbers.index(string) + 1)

def get_number_at_point(line: str):
  for number in numbers:
    if line.startswith(number):
      return string_to_number(number)

  return None

def get_calibration_value(line: str):
  digits = []

  for i, character in enumerate(line):
    if character.isdigit():
      digits.append(character)
    
    number_at_point = get_number_at_point(line[i:])
    if number_at_point:
      digits.append(number_at_point)

  return int(digits[0] + str(digits[-1]))

lines = input.split('\n')
sum = 0
for line in lines:
  sum = sum + get_calibration_value(line)

print(sum)
