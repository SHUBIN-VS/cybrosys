str_no = input("ENTER A STRING :")
count = 1
compress = ""
for i in range(1, len(str_no)):
    if str_no[i-1] == str_no[i]:
        count += 1
    else:
        if count == 1:
            compress += str_no[i-1]
        elif count > 1:
            compress += str(count)
            compress += str_no[i-1]
        count = 1
compress += str_no[-1]
print(compress)
print(f"Compression ratio : {len(str_no)}:{len(compress)}")
