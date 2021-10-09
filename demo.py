# Display user message
print("Hola,welcome to my program")
while True:
    # Get monthly investment, yearly interest rate, and years
    mi = int(input("Enter monthly investment"))
    yI = int(input("Enter yearly intrest"))
    y = int(input("Enter years"))
    # Convert yearly interest rate to monthly interest rate
    mI = yI/y
    # Convert years to months
    months = int(y/12)
    # Set the future value to zero
    future_value = 0
    # FOR each month
    for i in range(1,months):
        # Add monthly investment amount to future value
        future_value = future_value + mi
        # Calculate interest for month
        interest_for_month = yI/12
        # Add interest to future value
        future_value += interest_for_month
    # Display future value
    print("Future value",future_value)
    # Ask if user wants to continue
    if(input("Do You Want To Continue?[y/n]") == "y"):
        continue
    else:
        break
# Display end message
print("Bye..Bye")
