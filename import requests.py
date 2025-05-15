#Code by Daniel Herman, 4/15/2025
import requests
from bs4 import BeautifulSoup

url = input("Enter the URL of the public Google Doc: ").strip()

# I had to look up how to get the HTML from a google doc: https://solutionfall.com/question/how-can-table-data-from-a-public-google-doc-be-parsed-using-python/
response = requests.get(url)
response.raise_for_status()
soup = BeautifulSoup(response.text, 'html.parser')

table = soup.find("table")

if table:

    map = []


    #this gets the table data
    for row in table.find_all("tr"):
        cells = row.find_all(["td", "th"])

        if len(cells) >= 3:
            x = cells[0].get_text(strip=True)
            char = cells[1].get_text(strip=True)
            y = cells[2].get_text(strip=True)

            x_stripped = ''.join(filter(str.isdigit, x))
            y_stripped = ''.join(filter(str.isdigit, y))

        if x_stripped.isdigit() and y_stripped.isdigit():
            x = int(x_stripped)
            y = int(y_stripped)
            map.append((char, x, y))
    
    #Where we print the unicode at the right coordinates
    if map:
        max_x = 0
        max_y = 0

        for c, x, y in map:
            if x > max_x:
                max_x = x

            if y > max_y:
                max_y = y

        grid = []
        for z in range(max_y + 1):
            row = [' '] * (max_x + 1)
            grid.append(row)

        for ch, x, y in map:
            grid[y][x] = ch


        for row in reversed(grid):
            print(''.join(row))
    else:
        print("Error: No coordinates found.")
else:
    print("Error: Doc does not exist.")