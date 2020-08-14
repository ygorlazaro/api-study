
export interface IBaseModel {
    id: number;
}

interface IService<TModel> {
    getById(id: number): TModel | undefined;
    getAll(): TModel[];
}

export abstract class AbstractService<TModel extends IBaseModel> implements IService<TModel> {

    private data: TModel[] = [];

    constructor(data: TModel[]) {
        this.data = data;
    }

    getAll(): TModel[] {
        return this.data;
    }

    getById(id?: number): TModel | undefined {
        if (id === undefined) {
            return undefined;
        }

        // console.log(this.data);
        // const first = this.data[0];
        // console.log(first instanceof Student)
        // console.log(first instanceof Brand)

        return this.data.find(model => model.id === id)
    }
}
