export class ApiErro {
    timestamp: string;
    code: string;
    message: string;
    detail: string;
    errors: Erro[];
}

export class Erro {
    code: string;
    message: string;
}
