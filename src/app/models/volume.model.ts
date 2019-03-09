export class Volume {

    constructor(
        private _id: string,
        private _title: string,
        private _authors: string[],
        private _descr: string
    ) { }
        
    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this.id = id;
    }

    get title(): string {
        return this._title;
    }

    get authors(): string[] {
        return this._authors;
    }

    get descr(): string {
        return this._descr;
    }
}