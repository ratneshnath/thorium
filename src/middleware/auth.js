router.get("/users/:userId", userController.getUserData)
 router.put("/users/:userId", userController.updateUser)
 router.delete("/users/:userId", userController.deleteUser)