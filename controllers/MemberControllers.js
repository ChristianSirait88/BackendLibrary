import Member from "../models/MemberModel.js";

export const getMembers = async (req, res) => {
    try{
        const response = await Member.findAll();
        res.status(200).json(response);
    } catch(e){
        console.log(e.message);
    }
}

export const getMemberById = async (req, res) => {
    try{
        const response = await Member.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(e){
        console.log(e.message);
    }
}

export const createMember = async (req, res) => {
    try{
        await Member.create(req.body);
        res.status(201).json({msg: "Member created"});
    } catch(e){
        console.log(e.message);
    }
}

export const updateMember = async (req, res) => {
    try{
        await Member.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Member updated"});
    } catch(e){
        console.log(e.message);
    }
}

export const deleteMember = async (req, res) => {
    try{
        await Member.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Member deleted"});
    } catch(e){
        console.log(e.message);
    }
}