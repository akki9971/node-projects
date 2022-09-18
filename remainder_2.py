# from  datetime import  datetime;
# start = 1

# start_time = datetime.time
# while True:
#     if start == 1:

#         n = int(input("Enter the diviend:\n"))
#         d = int(input("Enter the divisor:\n"))

#         if d==0:
#             print("F*#* you!")
        
#         else:

#             q = n/d 
#             i=0

#             while True:
#                 if i<=q:
#                     i+=1
#                     continue
#                 else:
#                     i-=1
#                     remainder = n-(i*d)
#                     print(f"The remainder is {remainder}\n\n\n")
#                     end_time = datetime.time
#                     print(end_time - start_time)

#                     start = int(input("Enter 1 to go again, 0 to stop:\n"))
#                     break

#         continue
#     else:
#         print("You're Welcome!")
#         break




















# if q!=1:

#     while True:
#         if i<q:
#             i+=1
#             continue
#         else:
#             remainder = n-(d*(i-1))
#             print(f"The remainder is {remainder}")
#             break

# else: 
#     while True:
#         if i<q:
#             i+=1
#             continue
#         else:
#             print("The remainder is 0")
#             break





divident = int(input("[+] enter divident: "))
divisor = int(input("[+] enter divisor: "))

quotent = divident / divisor
print(quotent)