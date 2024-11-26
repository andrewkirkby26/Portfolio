export class Constants {
    static UI_STORAGE_VARIABLE_PREFIX = 'Resume'

    //Screen Sizes
    static SCREEN_SIZE_SMALL = 'Small';
    static SCREEN_SIZE_MEDIUM = 'Medium';
    static SCREEN_SIZE_LARGE = 'Large';

    static DIALOG_LOGIN = 'Login';
    static DIALOG_LOGOUT = 'Logout';

    static COLLECTION_USERS = 'Users';
    static COLLECTION_EVENTS = 'Events';

    static SNACKBAR_GOOD = 'good';
    static SNACKBAR_WARN = 'warn';
    static SNACKBAR_ERROR = 'error';

    static USER_LEVEL_USER = 'ROLE_USER';
    static USER_LEVEL_ADMIN = 'ROLE_ADMIN';

    static EVENT_PAGE_LOADED = "Page Loaded";
    static EVENT_RESUME_DOWNLOADED = "Resume Downloaded";

    //Routes
    static HOME = 'home';
    static ABOUT = 'about';
    static PROJECTS = 'projects';
    static CONTACT = 'contact'
    static SKILLS = 'skills';
    static EXPERIENCES = 'experiences';
    static CERTIFICATES = 'certificates';
    static PRINCIPLES = 'principles';

    static COLLECTION_MAIL = 'mail';

    static ENCODED_LOGO =  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAEZCAYAAABhDNfWAAAAAXNSR0IArs4c6QAAAJZlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAARAAAAWodpAAQAAAABAAAAbAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgSW1hZ2VSZWFkeQAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAfSgAwAEAAAAAQAAARkAAAAAIvSnLgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAi1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgSW1hZ2VSZWFkeTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpg60/ZAABAAElEQVR4Ae2dCZgkxXmmI6uqu+fkECAEQhJIGiwxsnUwAoEQTCNgYJgGZLsHBrAt+QBba0u29fha71qN/djra31IvmBto5U4p1cg6JnmZgbEImwGJHlpLDQgJHEfEiDm6q6qzP2+rPx7snOq7zoiq794nqjMioiM+OONzPgjIiMjnJMRAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQARHoHAJB52RFOalLYGCg4LaeUnCHvBS5lw5Bed9TN1h7HE9xbuvqqnNB1J7055Fq/8aifzzT+QFblvngevCdv4miiHVF2s4/0tbGwHsstkHQrPsNjFZvLXr3jNmzv/qe0A0MhK3FrtRaSYAPqEzHEmAl3KzKq5HQ8iKn5TlX8vIZn1WDKVHeBVwX1w9QgBXLeScck/xB8caGCi6av5LPyz2RFzmT0tFhVgRKswqtwPkhwJ75QBC68298hyuVVrnQjaJa960BV3Td5S3ui8EPWKfmqvFx0fCHXBi91blwzDuuARV41O2q0fNu47n3zoRtWsklCnxCzx7+B+PmfxPsm5PjQTguh10Euwx2Vo0GhG+moSyvw47CvgqL+8s9m9jnkD/6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MTw+v4x//wrL+5Hx2vOA0wmGsh2IazbjmmtwfiEs3aa7BkFkOp1AumLs9LwuyPzhwWdr3ibWvDwbCKgwsvdHumJjhZP1Z8VilSGP9I8bCDiaYRxm6GfK2yqwqUENGAAABFFJREFUdBr0Z8ODhvFlK1f+Tyt0C8c46MdrqLzTCp1utDQ8UkbGYW44He9N0Y3y1evppsOzEcJ40m48N3mzPXp4jYdlOMpojSteQ2Nx8UgZrDFGPzPpsPTPysBwaRmm6tGzoWSNLV6XNYyH/pYm/dPnlLNeb9rCWD7TrM2PcdGf5TRZj55haHh9+rrYMfVDlnZPmbOFtzTsfjB3C0d/Xpt1z/5nGBoyGzd41jjkzt7693A8Dh5UuKvGA0w8YVnRxHHgmitxDSfN/R3sQfSYwsTp45qLcM3zCPebsMzTZGZCWpMFknv+CWRv1PznSDkQARHIJQEoJ9ZHpnzq5YH+bJRMVW9R4U/WsKHCpgKl5Xk2HlPo1ohEkLqGDTym8wiU6jOUG4bXxgb/qdTjiWw4Px2OJ8AeXPMd/6U/47keYe9AuC4cyzjyNUgf7EpYa9yk5WQj908R9mmExSF+1XU03M6APQq2nmJnA5d5+jzCP4Lr+Gog3bCGl0wnEEjfKJ2QH+Whwwiw0ppnluZ7PZOfbxzzvX6eCBp2+bjSmiTGKZUElc8k1+XW2ZRqNgNwH1fqWb/sf4sDxxlPVktdM+N0mK5dl5VB/zuDQKdUNJ1RGsqFCCxwAlQ480Qw3+uZ/EzjCKdrpCA/9Ybw01lkHOMNoST/NqSfDpc+n7BADK5hr512OjPhuukCy18EREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCdBP4/FBxqMdL1B6gAAAAASUVORK5CYII='
}
