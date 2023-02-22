export interface PartOfDay {
    partOfDay: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
    bgColor: string;
}

const getPartOfDay = (date: Date | number): PartOfDay => {

    let hours;

    if (typeof date === 'number') {
        hours = date;
    } else {
        hours = date.getHours();
    }

    if (hours < 12 && hours >= 3) {
        return {
            partOfDay: 'Morning',
            bgColor: '#90D0FF'
        }
    }

    if (hours >= 12 && hours < 18) {
        return {
            partOfDay: 'Afternoon',
            bgColor: '#FFE1B2'
        }
    }

    if (hours >=18 && hours < 21) {
        return {
            partOfDay: 'Evening',
            bgColor: '#FFBAC1'
        }
    }

    return {
        partOfDay: 'Night',
        bgColor: '#02A8A857'
    }

}

export default getPartOfDay;