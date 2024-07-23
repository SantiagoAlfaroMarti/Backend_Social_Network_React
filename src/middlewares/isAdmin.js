export const isAdmin = (req, res, next) => {
    try {
        if (req.tokenData.role !== "admin") {
            
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        next();
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error authentication",
            error: error.message,
        })
    }
}