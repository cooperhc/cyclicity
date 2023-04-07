import csv

def clean_data(input_file, output_file):
    with open(input_file, 'r') as in_file, open(output_file, 'w', newline='') as out_file:
        reader = csv.reader(in_file)
        writer = csv.writer(out_file)
        
        header = next(reader)
        writer.writerow(header)

        keep_line = True
        for row in reader:
            if keep_line:
                date, close = row
                close = float(close)
                
                if close <= 5000:
                    writer.writerow([date, close])
                
            keep_line = not keep_line

input_file = 'SHC.csv'
output_file = 'SHC_clean.csv'
clean_data(input_file, output_file)