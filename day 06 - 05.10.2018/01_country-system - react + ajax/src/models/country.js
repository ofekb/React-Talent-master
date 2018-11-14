/** 
 *@class Country - represents a single country
 */
export class Country {
    flag;
    name;
    alpha3Code;
    borders;


    getFormatBorders(){
        return (this.borders) ? this.borders.join(" | ") : "";
    }
}
