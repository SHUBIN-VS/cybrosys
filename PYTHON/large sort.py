with open('shubin.txt', 'r') as f:
    show = f.read()
    print(show, '\n')
    a = list(show.split())
    b = sorted(a, key=len)
    c = []
    for i in range(0, len(b)):
        c.append(b[len(b) - 1])
        b.remove(b[len(b) - 1])
    print("successfully Done!")
    with open('vis.txt', 'w') as s:
        for j in c:
            s.write('%s ' % j)
    with open('vis.txt', 'r') as v:
        print(v.read())
