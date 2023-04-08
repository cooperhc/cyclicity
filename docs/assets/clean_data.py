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
                
                close_parts = close.split('.')
                if len(close_parts) > 1:
                    close = f"{close_parts[0]}.{close_parts[1]}"
                else:
                    close = close_parts[0]
                
                close = float(close)
                
                if close <= 100000:
                    writer.writerow([date, close])
                
            #keep_line = not keep_line

input_file = 'BTC.csv'
output_file = 'BTC_clean.csv'
clean_data(input_file, output_file)
