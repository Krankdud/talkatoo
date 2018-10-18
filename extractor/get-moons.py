#!/usr/bin/env python3

# Scrapes mariowiki for the list of moons and outputs JSON to stdout.
# WARNING: There are some moons that aren't picked up by this script.

from bs4 import BeautifulSoup
import re
import urllib.request

urls = [
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Snow_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Seaside_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Luncheon_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_Bowser%27s_Kingdom'
]

kingdoms = [
    'Cascade Kingdom',
    'Sand Kingdom',
    'Lake Kingdom',
    'Wooded Kingdom',
    'Lost Kingdom',
    'Metro Kingdom',
    'Snow Kingdom',
    'Seaside Kingdom',
    'Luncheon Kingdom',
    "Bowser's Kingdom"
]

print('{\n\t\"kingdoms": [')

for i in range(len(urls)):
    print('\t\t{\n\t\t\t"name": "' + kingdoms[i] + '",\n\t\t\t"required_moons": 1\n\t\t\t"moons": [')
    with urllib.request.urlopen(urls[i]) as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        moons = soup.find_all(href=re.compile('Moon_\\d*\\.png'))
    
        for moon in moons:
            moon_text = ''
            link = moon.find_next_sibling('a')
            if link != None:
                moon_text = link.text
            else:
                moon_text = moon.next_sibling.next_sibling.strip()
            print('\t\t\t\t{\n\t\t\t\t\t"name": "' + moon_text + '"\n\t\t\t\t},')
        print('\t\t\t]\t\t},')

print('\t]\n}')
