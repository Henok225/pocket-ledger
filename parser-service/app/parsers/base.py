from abc import ABC, abstractmethod


class StatementParser(ABC):

    @abstractmethod
    def parse(self, file):
        pass