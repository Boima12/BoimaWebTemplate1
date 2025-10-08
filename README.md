# React + NodeJS + MongoDB template by me
- this template come with basic set up of:
+ axios
+ external font (Inter)
+ react-router-dom (main.jsx)


<hr>


## detail guide on retrieving this React + NodeJS + MongoDB template
1. go to the folder you desired, type these in terminal:
```
	git clone https://github.com/Boima12/BoimaWebTemplate1.git
	cd BoimaWebTemplate1
```

2. go into react\BoimaWebTemplate1 folder, install the dependencies for React
```
	cd react\BoimaWebTemplate1
	npm install 
```

3. go back to BoimaWebTemplate1 root folder, go into nodejs folder, install the dependencies for NodeJS
```
	cd .. 
	cd .. 
	cd NodeJS 
	npm install
```

4. within nodejs folder, create .env file, make sure to replace <db_password> and <Project_Name> inside MONGO_URI <br>
Note: <db_password> means your mongoDB collection account password, not your mongoDB main account, <Project_Name> is the collection you want to link to, also "Boima" here is my mongoDB, if anybody else read this, this mean you change that part to your mongoDB account name too.
```
	MONGO_URI=mongodb+srv://Boima:<db_password>@nodeandexpressprojects.ct2vxsl.mongodb.net/<Project_Name>?retryWrites=true&w=majority&appName=NodeAndExpressProjects
```

5. change the project name, you can change the following from BoimaWebTemplate1 to <newProjectName>
- root folder name 
- go into react/, change the react folder name to <newProjectName>
- go into react/<newProjectName>, modify package.json and package-lock.json the "BoimaWebTemplate1" to <newProjectName> BUT LOWERCASE

6. (optional) remove git by deleting the .git folder, then the app no longer a Git repo. You can also delete this README.md too.

done.

