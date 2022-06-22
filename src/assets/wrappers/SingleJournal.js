import styled from "styled-components"
const Wrapper = styled.article`
background: var(--white);
border-radius: var(--borderRadius);
display: grid;
grid-template-rows: 1fr auto;
box-shadow: var(--shadow-2);

header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--grey-100);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  h5 {
    letter-spacing: 0;
  }
}
.info {
  h5 {
    margin-bottom: 0.25rem;
  }
  p {
    margin: 0;
    text-transform: capitalize;
    color: var(--grey-400);
    letter-spacing: var(--letterSpacing);
  }
}
.content {
  padding: 1rem 1.5rem;
}
.content-center {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr;
  }
}
footer {
  margin-top: 1rem;
}
.edit-btn,
.delete-btn,
.share-btn
{
  letter-spacing: var(--letterSpacing);
  cursor: pointer;
  height: 30px;
  margin-right: 0.5rem;
}
.edit-btn {
  color: var(--green-dark);
  background: var(--green-light);
}
.delete-btn {
  color: var(--red-dark);
  background: var(--red-light);
}
.share-btn{
  color: var(--black);
  background: var(--yellow-light);
}
.starred-btn{
  color:var(--black);
  background:var(--orange-light)
}
&:hover .actions {
  visibility: visible;
}
`
export default Wrapper