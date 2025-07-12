export const register = async (req, res) => {
 try {

    

    
    const { email, username, password } = req.body;
    console.log(email, username, password);

    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    if (user) {
        createError(400, 'User already exists');
    }
    console.log(user);

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

