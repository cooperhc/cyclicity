import csv

input_file = 'BTCweekly2.csv'
output_file = 'BTCweekly3.csv'

with open(input_file, 'r') as csv_input_file, open(output_file, 'w', newline='') as csv_output_file:
    # create CSV reader and writer objects
    reader = csv.reader(csv_input_file)
    writer = csv.writer(csv_output_file)

    for i, row in enumerate(reader):
        if i % 3 != 0: 
            writer.writerow(row)
