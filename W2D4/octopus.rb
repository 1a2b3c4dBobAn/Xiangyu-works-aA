def sluggish_oc(fishes)
  fishes.each_with_index do |fish1, i1|
    max_length = true

    fishes.each_with_index do |fish2, i2|
      next if i1 == i2
      max_length = false if fish2.length > fish1.length
    end
    return fish1 if max_length
  end
end



def clever_oc(fishes)
  return fishes if fishes.length == 1

  mid_idx = fishes.length / 2
  left = clever_oc(fishes.take(mid_idx))
  right = clever_oc(fishes.drop(mid_idx))
  merge(left, right)
end

def merge(left, right)
  merged = []

  until left.empty? || right.empty?
    case left.first.length <=> right.first.length
    when -1
      merged << left.first
    when 0
      merged << right.first
    when 1
      merged << right.first
    end
  end
  merged + left + right
end


def linear_biggest_fish(fishes)
  longest_fsh = ''

  fishes.each do |fish|
    longest_fsh = fish if fish.length > longest_fsh.length
  end
  longest_fsh
end


def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, index|
    return index if tile == direction
  end
end


tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end
