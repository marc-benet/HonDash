import json

from devices.formula import Formula


class Mapper:
    def __init__(self):
        with open('mapping.json') as file:
            self.map = json.load(file)

    def get_unit(self, value):
        try:
            return self.map.get(value).get('unit')
        except AttributeError:
            return None

    def get_formula(self, value):
        try:
            formula = self.map.get(value).get('formula')
        except AttributeError:  # if value does not exist
            formula = 'voltage'

        if formula is None:  # value exists but no formula found
            formula = 'voltage'

        return getattr(Formula, formula)

    def get_tag(self, value):
        try:
            return self.map.get(value).get('tag')
        except AttributeError:
            return None

    def get_label(self, value):
        try:
            return self.map.get(value).get('label')
        except AttributeError:
            return None

    def get_sectors(self, value):
        try:
            return self.map.get(value).get('sectors')
        except AttributeError:
            return None

    def get_max(self, value):
        try:
            return self.map.get(value).get('max')
        except AttributeError:
            return None

    def get_decimals(self, value):
        try:
            return self.map.get(value).get('decimals')
        except AttributeError:
            return None

    def get_setup(self):
        setup = {}
        for value in self.map.keys():
            tag = self.get_tag(value)
            label = self.get_label(value)
            sectors = self.get_sectors(value)
            max = self.get_max(value)
            decimals = self.get_decimals(value)
            if tag:
                setup[value] = {"tag": tag, "label": label, "sectors": sectors, "max": max, "decimals": decimals}
        return setup
