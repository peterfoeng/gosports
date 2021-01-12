export interface ISports {
    items: ISport[];
}

export interface ISport {
    id: string;
    name: string;
    status: string;
    routeName: string;
}
