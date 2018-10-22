#!/usr/bin/env python3

# Scrapes mariowiki for the list of moons and outputs JSON to stdout.
# WARNING: There are some moons that aren't picked up by this script.

from bs4 import BeautifulSoup
import re
import urllib.request

urls = [
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Cap_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Cloud_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Snow_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Seaside_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Luncheon_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Ruined_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_Bowser%27s_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Moon_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Mushroom_Kingdom',
    'https://www.mariowiki.com/List_of_Power_Moons_in_the_Dark_Side'
]

kingdoms = [
    'Cap Kingdom',
    'Cascade Kingdom',
    'Sand Kingdom',
    'Lake Kingdom',
    'Wooded Kingdom',
    'Cloud Kingdom',
    'Lost Kingdom',
    'Metro Kingdom',
    'Snow Kingdom',
    'Seaside Kingdom',
    'Luncheon Kingdom',
    'Ruined Kingdom',
    "Bowser's Kingdom"
    'Moon Kingdom',
    'Mushroom Kingdom',
    'Dark Side'
]

for i in range(len(urls)):
    print('{\n\tname: "' + kingdoms[i] + '",\n\trequiredMoons: 1,\n\tmoons: [')
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
            print('\t\t{\n\t\t\tname: "' + moon_text + '"\n\t\t},')
        print('\t]\n},')
