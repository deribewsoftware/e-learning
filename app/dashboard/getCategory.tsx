'use client'

import { Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer,TablePagination,TableRow } from "@mui/material";
import TableHead  from "@mui/material/TableHead";
import { MdDelete, MdEdit, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Button from "../components/buttons/button";
import AddCategory from "./addCategory";
import { useState } from "react";
import AddSubject from "./addSubjects";
interface GetCategoryProps{
  categories?: any[] |null;
}
const GetCategory:React.FC<GetCategoryProps> = ({categories}) => {
  const [open ,setOpen] =useState("");
  const onOpen=(data:string)=>{
    if (data===open) return setOpen("");
    if (data!==open) return setOpen(data);

  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return ( <Paper>
    <div className="flex justify-end items-end w-1/3 p-2" >
      <Button small outline onClick={()=>{}} label="Add Category"/>
    </div>
    {<AddCategory/>}
<TableContainer  sx={{minWidth:600}}>
  <Table aria-label="simple table" >
    <TableHead  >
      <TableRow >
        <TableCell >Category</TableCell>
        <TableCell>Subjects</TableCell>
        <TableCell>Actions</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>

      {categories && categories?.map((category:any) => <> <TableRow key={category.id} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>{category.category}</TableCell>
        <TableCell>{category.sub_category.length}</TableCell>
        <TableCell>
        <div className="flex gap-6">
          <IconButton aria-label="expand row"
            size="small"
            color="primary"
            onClick={()=>onOpen(category.category)}>

            <MdEdit/>
          </IconButton>
          <IconButton aria-label="expand row"
          color="error"
            size="small"
            onClick={()=>onOpen(category.category)}>

            <MdDelete/>
          </IconButton>
          
        </div></TableCell>
        <TableCell>
        <IconButton aria-label="expand row"
            size="small"
            onClick={()=>onOpen(category.category)}>

            {open===category.category ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
          </IconButton>

        </TableCell>
      </TableRow >
      <TableRow sx={{ '& > *': { borderBottom: 'none' } }}>
        <TableCell  style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open===category.category} timeout="auto" unmountOnExit>
          <div className="p-6 mb-4">

          <div className="flex justify-end items-end w-1/3 p-2" >
      <Button small outline onClick={()=>{}} label="Add Category"/>
    </div>
    {<AddSubject categoryId={category.id}/>}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell>Courses</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category.sub_category.map((subject:any) =><TableRow key={subject.id}>
                  <TableCell>{subject.sub_category}</TableCell>
                  <TableCell>{subject.courses.length}</TableCell>
                  <TableCell>
          <div className="flex gap-6">
          <IconButton aria-label="expand row"
            size="small"
            color="primary"
            onClick={()=>onOpen(category.category)}>

            <MdEdit/>
          </IconButton>
          <IconButton aria-label="expand row"
          color="error"
            size="small"
            onClick={()=>onOpen(category.category)}>

            <MdDelete/>
          </IconButton>
          
        </div></TableCell>
                </TableRow>)}

              </TableBody>
            </Table>
          </div>
          </Collapse>
        </TableCell>
      </TableRow>
      </>)}
   
    </TableBody>
  </Table>

</TableContainer>

<TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={categories? categories.length:0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
</Paper> );
}
 
export default GetCategory;