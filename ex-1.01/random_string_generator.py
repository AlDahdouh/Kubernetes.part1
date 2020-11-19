import time
import random
import string


def random_string():
    letters = string.ascii_letters
    result = ''.join(random.choice(letters) for i in range(50))
    return result

str = random_string()

while 1:
    print(time.ctime(), ":", str)
    time.sleep(5)
