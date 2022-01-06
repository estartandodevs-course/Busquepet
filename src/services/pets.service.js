import { petsMock } from "_mock/feed";

export function getPets() {
  const petsStorage = localStorage.getItem("pets");
  if (petsStorage) {
    return JSON.parse(petsStorage);
  }
  localStorage.setItem("pets", JSON.stringify(petsMock));
  return petsMock;
}

export function getPetById(id) {
  const pets = getPets();
  const pet = pets.find((_pet) => _pet.id === id);
  return pet;
}

export function addPet(pet) {
  const petsStorage = JSON.parse(localStorage.getItem("pets")) || petsMock;
  const petsListModified = [...petsStorage, pet];
  localStorage.setItem("pets", JSON.stringify(petsListModified));
  return petsListModified;
}
