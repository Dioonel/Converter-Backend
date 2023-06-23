export class TestService {
    get() {
        return { message: 'Test Service' };
    }

    post(body) {
        console.log(body);
        return { message: 'POST OPERATION DONE', body };
    }
}