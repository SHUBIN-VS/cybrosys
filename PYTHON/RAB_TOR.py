import random


def my_gen():
    num1 = str(random.randint(1000, 9999))
    return num1


gen_no = my_gen()
print("SYSTEM GENERATED NUMBER IS : ", gen_no)
while True:
    play = 0
    guess_no = input("ENTER FOUR DIGIT NUMBER : ")
    if len(guess_no) != 4:
        print("INVALID INPUT!!!")
        continue
    elif not guess_no.isdigit():
        print("INVALID INPUT...")
        continue
    elif str(guess_no) == str(gen_no):
        print("YOU ARE WINNER!!!!!!")
        play = 1
    if play != 1:
        a = gen_no
        b = guess_no
        rab_count = 0
        i = -1
        le = 4
        rab = ''
        while le != 0:
            c = a[i]
            d = b[i]
            if c == d:
                rab_count += 1
                rab += c
            le -= 1
            i -= 1
        if rab_count > 0:
            print(f"{rab_count} times rabbit generated")
        j = -1
        lng = 4
        tor_count = 0
        while lng != 0:
            if b[j] in a:
                if b[j] not in rab:
                    tor_count += 1
            j -= 1
            lng -= 1
        if tor_count > 0:
            print(f"{tor_count} times tortoise generated")
        if rab_count == 0 and tor_count ==0:
            print("SORRY YOU GOT NOTHING!!!!!")
    ch = input("DO YOU WANT TO CONTINUE??? (y/n) :")
    while ch not in ('y', 'Y', 'n', 'N'):
        print("SELECT CORRECT OPTION!!!")
        ch = input("DO YOU WANT TO CONTINUE??? (y/n) :")
    if (ch == 'y' or ch == 'Y') and (play == 1):
        gen_no = my_gen()
        print("SYSTEM AGAIN GENERATED A NUMBER : ", gen_no)
    elif ch == 'n' or ch == 'N':
        print("THANKS FOR PARTICIPATE!!!!")
        break

