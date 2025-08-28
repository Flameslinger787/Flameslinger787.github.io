# Website scraper for Gametora to retrieve playable UmaMusume

import os
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import json

# Get folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(BASE_DIR, "Umas.js")

# Use Chrome
options = webdriver.ChromeOptions()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)

url = "https://gametora.com/umamusume/characters"
driver.get(url)
time.sleep(3)

chars = []
links = driver.find_elements(By.CSS_SELECTOR, "a.sc-73e3e686-1")

for link in links:
    try:
        name_elem = link.find_element(By.CSS_SELECTOR, "div.sc-73e3e686-4.gefniT")
        name = name_elem.text.strip()
        img_elem = link.find_element(By.TAG_NAME, "img")
        img_url = img_elem.get_attribute("src")

        # Remove 'thumb' from URL to get full-size image
        img_url = img_url.replace("/thumb/", "/")

        # Ignore blank entries (not available on global servers)
        if name:
            if img_url.startswith("/"):
                img_url = "https://gametora.com" + img_url
            chars.append({"name": name, "img": img_url})
    except Exception as e:
        print("Skipping one entry:", e)

driver.quit()

# Wrapper to make it JS friendly
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    f.write("const characters = ")
    json.dump(chars, f, indent=2, ensure_ascii=False)
    f.write(";")

print(f"Scraped {len(chars)} characters → {OUTPUT_PATH} created!")
