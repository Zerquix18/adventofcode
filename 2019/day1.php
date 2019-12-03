<?php

function calculateFuelLeft(int $fuel): int
{
  return floor(($fuel / 3) - 2);
}

$input = file_get_contents(dirname(__FILE__) . '/day1-input.txt');
$numbers = array_map(function($number) {
    return (int) $number;
  },
  explode("\n", $input)
);

$total_fuel = 0;
foreach ($numbers as $fuel) {
  $total_fuel += calculateFuelLeft($fuel);
}

echo "Total fuel:", $total_fuel, "\n";

$extra_fuel = 0;
foreach ($numbers as $fuel) {
  $current_fuel = $fuel;
  while (true) {
    $current_fuel = calculateFuelLeft($current_fuel);
    if ($current_fuel <= 0) {
      break;
    }
    $extra_fuel += $current_fuel;
  }
}

echo "Extra fuel:", $extra_fuel, "\n";
