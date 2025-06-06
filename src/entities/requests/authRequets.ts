export const login = async (email: string, password: string) => {
    if(password === '123456') {
        return Promise.resolve({
            id: '1',
            email: email,
        });
    }

    return Promise.reject(new Error('Invalid password'));
}