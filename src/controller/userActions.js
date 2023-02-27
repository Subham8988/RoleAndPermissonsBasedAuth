const db = require('../modal/modalSchema');


// create Permissons
const createPermissons= async (req,res)=>{
    try {
        const resData =req.body;
        if(resData.permission_Name!='' && resData.permission_Name!=null && resData.permission_Name!=undefined)
        {
            if(resData.permission_Status!='' && resData.permission_Status!=null && resData.permission_Status!=undefined)
            {
                var i =  Math.floor(
                    Math.random() * (1000 - 1 + 1) + 1
                  )
                const data = db.permissons({
                    permission_Name:req.body.permission_Name,
                    permission_Status:req.body.permission_Status,
                    permission_Id:i
                });
                //  var h= await data.delete(data._id);
                // console.log("Permissons Data",data._id);
                await data.save();
                res.status(201).send({status:"201",msg:"permisson Created ",permisson_Id:`${i}`})
            }
            else{res.status(406).send({msg:"Please Enter permisson status"})};
        }
        else{
                res.status(406).send({msg:"Please Enter permisson_name"})
        }

    } catch (error) {
        res.status(500).send({status:'500',msg:"error",err:`${error}`})
    }
};

// Delete Permissons
const deletePermissons= async (req,res)=>{
    try {
        var permisson_Id = req.query.permisson_Id;
        if(permisson_Id!='' && permisson_Id!=undefined && permisson_Id!=null)
        {
            var data = await db.permissons.findOneAndDelete({permission_Id:permisson_Id});
            console.log(data);
            if(data)
            {
                res.status(200).send({status:"200",msg:`permission with permission_Id ${permisson_Id} deleted sucesfully `})
            }
            else
            {
                res.status(404).send({status:"404",msg:`permission with permission_Id ${permisson_Id} not found `})
            }
        }
        else
        {
            res.status(406).send({status:406,msg:"Please enter permisson id"})
        }
        
    } catch (error) {
        res.status(500).send({status:"500",msg:"err",err:`${error}`});
    }
};

// get permissons list
const permissonsList = async (req,res)=>{
    try {
        var data =await db.permissons.find();
        res.status(200).send({status:'200',msg:"sucess",data:data})
    } catch (error) {
        res.status(500).send({status:"500",msg:"err",err:`${error}`});
    }
}

// create role
const createRole = async (req,res)=>{
    try {
        const resData =req.body;
        if(resData.role_Name!='' && resData.role_Name!=null && resData.role_Name!=undefined && resData.role_Name!=" ")
        {
            if(resData.role_Status!='' && resData.role_Status!=null && resData.role_Status!=undefined)
            {
                var i =  Math.floor(
                    Math.random() * (1000 - 1 + 1) + 1
                  );
                  const data = db.roles({
                    role_Name:req.body.role_Name,
                    role_Status:req.body.role_Status,
                    role_Id:i
                  })
                  await data.save();
                  res.status(201).send({status:200,msg:`role with role id ${i} created sucess fully`,})
                }
                else{res.status(406).send({msg:"Please Enter role status"})};     
            }
            else{res.status(406).send({msg:"Please Enter role name"})}
    } catch (error) {
        res.status(500).send({status:"500",msg:"err",err:`${error}`});
    }
}
// delete role
const deleteRole = async (req,res)=>{
    try {
        var role_Id = req.query.role_Id;
        if(role_Id!='' && role_Id!=undefined && role_Id!=null)
        {
            var data = await db.roles.findOneAndDelete({role_Id:role_Id});
            if(data)
            {
                res.status(200).send({status:"200",msg:`role with role_Id ${role_Id} deleted sucesfully `})
            }
            else
            {
                res.status(404).send({status:"404",msg:`role with role_Id ${role_Id} not found `})
            }
        }
        else
        {
            res.status(406).send({status:406,msg:"Please enter role_Id"})
        }
    } catch (error) {
        res.status(500).send({status:"500",msg:"err",err:`${error}`});
    }
}

// role list
const roleList = async (req,res)=>{
    try {
        const data = await db.roles.find();
        res.status(200).send({status:200,msg:'sucess',result:data})
    } catch (error) {
        res.status(500).send({status:"500",msg:"err",err:`${error}`});
    }
}

// assign permissons to role 
const assignPtoR = async (req,res)=>{
    try {
        var permission_Id= req.query.permission_Id;
        let a =permission_Id.split(',');
        var role_Id = req.query.role_Id;
        var purm =[];
        var permissonsData={};
        var  roleData = await db.roles.find({role_Id:role_Id});
        for(var i=0;i<a.length;i++)
        {
             permissonsData= await db.permissons.find({permission_Id:a[i]},{_id:0});
            purm[i]=permissonsData;
        }   
        console.log(purm);
        // var dataaa= await db.roles.findByIdAndUpdate(roleData[0]._id,{permissons:purm});
        res.status(200).send({status:200,msg:`permissons with permissons id ${permission_Id} is assign to role id ${role_Id}`});

    } catch (error) {
        res.status(500).send({status:"500",msg:"err",err:`${error}`});
    }
}

module.exports={createPermissons,deletePermissons,permissonsList,createRole,deleteRole,roleList,assignPtoR}
