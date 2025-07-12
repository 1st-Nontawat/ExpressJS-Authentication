export const register = (req, res) => {
 try {

    // if(true) {
    //     CreateError(500, 'User already exists');
    // }

    const { email, username, password } = req.body;
    console.log(email, username, password);

    res.json({
        message: 'User registered successfully',
    });
    } catch (error) {
        next(error);
    }
};

export const login = (req, res) => {
    try {
        console.log(req.body);
        res.json({
            message: 'User logged in successfully',
        });
    } catch (error) {
        next(error);
    }
};

